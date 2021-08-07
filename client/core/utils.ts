import { Token } from 'typedi';
import { ClientModuleProps } from '@typings/modules';

export const ClientModuleToken = new Token<ClientModuleProps>('server-module');
