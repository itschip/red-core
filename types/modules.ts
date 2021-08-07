export interface ServerModuleProps {
	name?: string;
	
	init(): Promise<boolean>;
}