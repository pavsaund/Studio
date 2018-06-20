import { PLATFORM } from 'aurelia-pal';

export function configure(config) {
  config.globalResources(PLATFORM.moduleName('./action_menu/action_menu'));
  config.globalResources(PLATFORM.moduleName('./app_footer/app_footer'));
  config.globalResources(PLATFORM.moduleName('./app_header/app_header'));
  config.globalResources(PLATFORM.moduleName('./side_bar/side_bar'));
}