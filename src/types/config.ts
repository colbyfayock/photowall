import { ReactNode } from "react";

export interface PhotowallConfig {
  logo?: ReactNode;
  title?: string;
}


export interface ThemeConfig extends Partial<PhotowallConfig> {}