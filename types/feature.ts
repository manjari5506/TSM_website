import React from "react";

export type Feature = {
  id: number;
  icon: React.FC<{ color?: string; size?: number }>;
  title: string;
  description: string;
}
