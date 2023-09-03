# NextCRM

NextCRM is a CRM build on top of the Next.JS 13.4 using TypeScript, great UI library shadcn, Prisma and MongoDB as a database. Uploadthings as a S3 blob for document storage.

## Online Demo

You can try it here [demo.nextcrm.io](https://demo.nextcrm.io), login via google account or create new user and password

## What we used to build it

Next.js - React framework&lt;/br&gt; shadcn - UI&lt;/br&gt; Prisma ORM - together with mongoDB (tested with version 5.0)&lt;/br&gt; useSWR - for client side data fetching&lt;/br&gt; NextAUTH - for user authentication&lt;/br&gt; Rossum - for invoice data parsing with AI&lt;/br&gt; OpenAI API - for automated email notifications&lt;/br&gt; Tremor - for creating charts&lt;/br&gt; Resend.com - together with react.email &lt;/br&gt;

![hero](/public/og.png)## What we plan to build next

1. More AI powered - daily summary of tasks and project (OpenAI integration ) - in test
2. Email campaigns management - integration with MailChimp and Listmonk - in planning
3. Docker version - in planning (There will be complete bundle to run NextCRM on-premise)
4. Testing - Jest + Cypress (if anyone want to help I will be very happy) - in planning
5. Fix all Types issue ( nom more "any" ) - in progress

## Emails

We use Resend.com + React.email as primary email sender and email templates

[resend.com](https://resend.com) + [react.email](https://react.email)

## Reports

We use Tremor charts as a tool for creating charts in NextCRM

![hero](/public/reports.png)## Video (YouTube channel with functions showcase)

Channel link - [https://www.youtube.com/channel/UCQneopupgtjG4py68-edA0w](https://www.youtube.com/@NextCRM_IO) &lt;/br&gt; Invoice module - https://youtu.be/NSMsBMy07Pg

## Documentation

Will be soon at domain: http://docs.nextcrm.io

## Installation

&lt;details&gt;&lt;summary&gt;&lt;b&gt;Show instructions&lt;/b&gt;&lt;/summary&gt;

1. Install the preset:

   ```sh
   npm install
   ```

2. .env + .env.local - Change .env.example to .env and .env.local.example to .env.local

**.env**

> > - You will need mongodb URI string for Prisma ORM

**.env.local**

> > - NextAUTH - for auth
> > - uploadthings - for storing files
> > - rossum - for invoice data exporting
> > - openAI - for automatic Project management assistant
> > - SMPT and IMAP for emails

1. Init Prisma

   ```sh
    npx prisma generate
    npx prisma db push
   ```

2. Run app on local

   ```sh
   npm run dev
   ```

3. Import initial data from initial-data folder

&lt;/details&gt;

## Contact

[www.dovhomilja.cz](https://www.dovhomilja.cz).

## License

Licensed under the [MIT license](https://github.com/pdovhomilja/nextcrm-app/blob/main/LICENSE.md).
