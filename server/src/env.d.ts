declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PORT: number;
			JWT_SECRET: string;
			DB_HOST: string;
			DB_PORT: number;
			DB_USER: string;
			DB_PASSWORD: string;
			DB_DATABASE: string;
		}
	}
}

export {};