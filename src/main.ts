import { Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {
  async onload() {
    this.addStatusBarItem().setText('✒ Obsidian Shakespeare');
  }

  onunload() {
    console.log('unloading plugin');
  }
}
