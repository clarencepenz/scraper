## Getting Started

Install the dependencies using either of the below code blocks:

```bash
yarn
```
or

```bash
npm install
```

### Create project

Create a [supabase account](https://app.supabase.com/sign-up) if you don't have one else [login](https://app.supabase.com/sign-in).

Click on `New Project` to create a project.

![Create project](https://user-images.githubusercontent.com/11736897/228963665-5ade1662-1e71-43d1-88e1-f901d23aab47.png)

### Name Project

Add the name `scraper` to {1} and click `Create new project`

![Name Project](https://user-images.githubusercontent.com/11736897/228963713-a0403e24-5dda-41e6-adcc-6e25d13fc2b0.png)

You'll see the dashboard of the created project

### Dashboard

![Dashboard](https://user-images.githubusercontent.com/11736897/228963743-9facd6b2-4529-43e0-b2c9-9ceccf2a71ea.png)


### Get Keys
To get the `project url` and `anon public` key, click on settings {1}, API{2}, copy both URL{3}, and anon public{4}.

In the root directory of the project, create `.env` and add the following to it:

 ```bash
SUPABASE_URL=REPLACE_WITH_YOUR_PROJECT_URL{3}
SUPABASE_ANON_KEY=REPLACE_WITH_YOUR_ANON_PUBLIC_KEY{4}
 ```
![Keys](https://user-images.githubusercontent.com/11736897/228963761-aed63673-4978-4568-b522-c10b0cb5957a.png)

### Add Table

To add a new table, navigate to Database{1}, Tables{2}, and New Table{3}

![Add Table](https://user-images.githubusercontent.com/11736897/228963801-c869675d-4350-42e0-a207-0af752586a45.png)


### Configure Table
Add the name{1} of the table as `scraper`, uncheck `Enable Row Level Security`{2}, add a new column `jobs`, set the type to `json`,
set the default value of `id` to `1`, click on {4} to uncheck `is identity` to remove auto Increment. Now save.

![Config Table](https://user-images.githubusercontent.com/11736897/228963809-c6b2d67e-6fed-4ae4-b0d8-f59e0c76bf8e.png)


Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

You should see this message in your console `App running on port 4000...`
