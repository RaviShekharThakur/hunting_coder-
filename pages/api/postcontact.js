import * as fs from 'fs';
export default async function handler(req, res) {
    if (req.method === 'POST') {
        
        // console.log(req.body)
        let data = await fs.promises.readdir('contactdata');
        console.log(data)
        const bodyString = JSON.stringify(req.body);
        fs.promises.writeFile(`contactdata/${data.length + 1}.json`, bodyString)
        res.status(200).json(req.body)
    } else {
      res.status(200).json(["allBlogs"])
    }
  }
