const { Client } = require('@notionhq/client');
const notionAccessToken = process.env.NOTION_ACCESS_TOKEN
const notionDatabaseId = process.env.NOTION_DATABASE_ID

const client = new Client({ auth: notionAccessToken });

export default async function handler(req, res) {

    if (!notionAccessToken || !notionDatabaseId) {
        throw new Error("Cannot find Notion Access Token or Notion Database Id")
    }

    const query = await client.databases.query({
        database_id: notionDatabaseId,
    })

    const users = await client.users.list();

    res.status(200).json({ message: query.results })
}