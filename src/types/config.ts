export interface PhotowallConfig {
  title?: string;
  folder?: string;
}


export interface ThemeConfig extends Partial<PhotowallConfig> {}