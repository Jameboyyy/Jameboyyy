import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { payloadCloud } from '@payloadcms/plugin-cloud';
import nestedDocs from '@payloadcms/plugin-nested-docs';
import redirects from '@payloadcms/plugin-redirects';
import seo from '@payloadcms/plugin-seo';

import { slateEditor } from '@payloadcms/richtext-slate';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';

import Categories from './collections/Categories';
import Comments from './collections/Comments';
import { Media } from './collections/Media';
import { Pages } from './collections/Pages';
import { Posts } from './collections/Posts';
import { Projects } from './collections/Projects';
import Users from './collections/Users';
import BeforeDashboard from './components/BeforeDashboard';
import BeforeLogin from './components/BeforeLogin';
import { seed } from './endpoints/seed';
import { Footer } from './globals/Footer';
import { Header } from './globals/Header';
import { Settings } from './globals/Settings';
import type { GenerateTitle } from '@payloadcms/plugin-seo/types';

const generateTitle: GenerateTitle = () => {
  return 'My Website';
}

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

console.log('Environment Variables:');
console.log('DATABASE_URI:', process.env.DATABASE_URI);
console.log('PAYLOAD_PUBLIC_SERVER_URL:', process.env.PAYLOAD_PUBLIC_SERVER_URL);
console.log('NEXT_PUBLIC_SERVER_URL:', process.env.NEXT_PUBLIC_SERVER_URL);

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    components: {
      beforeLogin: [BeforeLogin],
      beforeDashboard: [BeforeDashboard],
    },
    webpack: config => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          dotenv: path.resolve(__dirname, './dotenv.js'),
          [path.resolve(__dirname, './endpoints/seed')]: path.resolve(
            __dirname,
            './emptyModuleMock.js',
          ),
        },
      },
    }),
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Pages, Posts, Projects, Media, Categories, Users, Comments],
  globals: [Settings, Header, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  express: {
    preMiddleware: [
      cors({
        origin: ['https://jameboyyy.vercel.app', 'https://jameboyyy-payload.vercel.app'],
        credentials: true,
      }),
    ],
  },
  cors: ['https://jameboyyy.vercel.app', 'https://jameboyyy-payload.vercel.app'].filter(Boolean),
  csrf: ['https://jameboyyy.vercel.app', 'https://jameboyyy-payload.vercel.app'].filter(Boolean),
  endpoints: [
    {
      path: '/seed',
      method: 'get',
      handler: seed,
    },
  ],
  plugins: [
    redirects({
      collections: ['pages', 'posts'],
    }),
    nestedDocs({
      collections: ['categories'],
    }),
    seo({
      collections: ['pages', 'posts', 'projects'],
      generateTitle,
      uploadsCollection: 'media',
    }),
    payloadCloud(),
  ],
});
