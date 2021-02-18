import { App, PluginSettingTab, Setting } from 'obsidian';
import ShakespearePlugin from './main';

export interface ShakespeareSettings {
  wordsPerDay: number;
}

export const DEFAULT_SETTINGS: ShakespeareSettings = {
  wordsPerDay: 200,
};

export class ShakespeareSettingTab extends PluginSettingTab {
  plugin: ShakespearePlugin;

  constructor(app: App, plugin: ShakespearePlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    this.containerEl.empty();
    this.containerEl.createEl('h3', { text: 'Settings' });

    new Setting(this.containerEl)
      .setName('Words per day')
      .setDesc('number of your goal of words per day')
      .addText((text) => {
        text
          .setValue(this.plugin.settings.wordsPerDay.toString())
          .onChange(async (value) => {
            this.plugin.settings.wordsPerDay = parseInt(value);
            await this.plugin.saveSettings();
          });
      });
  }
}
