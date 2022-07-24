
import { S3 } from "aws-sdk";

const s3 = new S3({
    region: 'us-east-2',
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    signatureVersion: 's3v4',
});

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '8mb'
        }
    }
}
export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { name } = req.body;
        const fileParams = {
            Bucket: process.env.BUCKET_NAME,
            Key: name,
            Expires: 600,
        };

        const url = await s3.getSignedUrlPromise('putObject', fileParams);

        res.status(200).json({ url })
    } catch (err) {
        res.status(400).json({ message: err })
    }
}