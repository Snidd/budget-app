interface ImportMetaEnv {
	readonly VITE_MONGODB_URL: string;
	readonly VITE_BASEURL: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
