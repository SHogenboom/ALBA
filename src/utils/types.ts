// UI COMPONENTS
// Set the value type of the elements - all optional
export type Component = {
  width: number;
  height: number;
  pos: { x: number; y: number };
  padding?: number[];
};

export type UIComponents = {
  sidebar: Component;
  coins: Component;
  gridBox: Component;
  codeblocksBox: Component;
  questionBox: Component;
  algorithmBoxUtilsBox: Component;
  algorithmBox: Component;
  [key: string]: Component | undefined;
};
