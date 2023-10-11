const { Client } = require('@notionhq/client');
const notionAccessToken = process.env.NOTION_ACCESS_TOKEN
const notionDatabaseId = process.env.NOTION_DATABASE_ID

export default async function connection(req, res) {
    const client = new Client({ auth: notionAccessToken });

    if (!notionAccessToken || !notionDatabaseId) {
        throw new Error("Cannot find Notion Access Token or Notion Database Id")
    }
    res.status(200).json({ message: client })
    return client
}