import { NextApiRequest, NextApiResponse } from 'next';

import NextAuth, { InitOptions } from 'next-auth';
import Providers from 'next-auth/providers';

const options: InitOptions = {
	// Configure one or more authentication providers
	providers: [
		// Providers.Email({
		// 	server: {
		// 		host: process.env.EMAIL_SERVER_HOST,
		// 		port: parseInt(process.env.EMAIL_SERVER_PORT),
		// 		auth: {
		// 			user: process.env.EMAIL_SERVER_USER,
		// 			pass: process.env.EMAIL_SERVER_PASSWORD,
		// 		},
		// 	},
		// 	from: process.env.EMAIL_FROM,
		// }),
		Providers.IdentityServer4({
			id: 'next-dashboard',
			name: 'IEG',
			scope: 'openid profile sample-api-key offline_access',
			domain: 'authority-dev.ieg-america.com',
			clientId: 'next-dashboard',
			clientSecret: 'Fq5WF9p4zSkGGniVNbb-UcDGiXAX9h2c',
			protection: 'pkce',
		}),
		// Providers.Google({
		// 	clientId: process.env.GOOGLE_ID,
		// 	clientSecret: process.env.GOOGLE_SECRET,
		// }),
		// ...add more providers here
	],

	// session: {
	// 	jwt: true,
	// },

	// A database is optional, but required to persist accounts in a database
	database: {
		type: 'postgres',
		host: process.env.DB_HOST,
		port: parseInt(process.env.DB_PORT),
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB,
		synchronize: true,
	},

	// debug: true,
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
