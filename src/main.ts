import { Plugin } from 'obsidian';
import {
  DEFAULT_SETTINGS,
  ShakespeareSettings,
  ShakespeareSettingTab,
} from './settings';

export default class ShakespearePlugin extends Plugin {
  settings: ShakespeareSettings;

  async onload() {
    await this.loadSettings();

    /**
     * @todo Research how to make status bar reactive
     * After the user update the words per day settings
     * the status bar should reflect the new words per day goal.
     */
    this.addStatusBarItem().setText(
      `✒ Shakespeare 0 / ${this.settings.wordsPerDay}`
    );
    this.addSettingTab(new ShakespeareSettingTab(this.app, this));
  }

  async loadSettings() {
    const savedSettings = await this.loadData();
    this.settings = { ...DEFAULT_SETTINGS, ...savedSettings };
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  onunload() {
    console.log('unloading plugin');
  }
}
