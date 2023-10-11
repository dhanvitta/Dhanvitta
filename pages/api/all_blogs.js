const { Client } = require('@notionhq/client');

const notionAccessToken = process.env.NOTION_ACCESS_TOKEN
const notionDatabaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({ auth: notionAccessToken });

export default async function handler(req, res) {

    if (!notionAccessToken || !notionDatabaseId) {
        throw new Error("Cannot find Notion Access Token or Notion Database Id")
    }

    const pageId = 'c40b5d4383fc421ab9c8170922746345';
    const response = await notion.pages.retrieve({ page_id: pageId });

    console.log(response);

    res.status(200).json({ message: response })
}