import { Token } from "typedi";
import { ServerModuleProps } from "@typings/modules";

export const ServerModuleToken = new Token<ServerModuleProps>('server-module')