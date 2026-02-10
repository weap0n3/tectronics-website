import react from '@vitejs/plugin-react-swc'
import { componentTagger } from 'lovable-tagger'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	server: {
		proxy: {
			'/api': {
				target: 'https://tectronics.at',
				changeOrigin: true,
				secure: false,
			},
		},
		host: '::',
		port: 8080,
		base: '/',
	},
	plugins: [react(), mode === 'development' && componentTagger()].filter(
		Boolean,
	),
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@services': path.resolve(__dirname, './src/services'),
			'@types': path.resolve(__dirname, './src/types'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
		},
	},
}))
