export interface ServerModuleProps {
  name?: string;

  init(): Promise<boolean>;
}

export interface ClientModuleProps {
  name?: string;

  init(): Promise<boolean>;
}
