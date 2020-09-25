// Imports the Google Cloud client library
//import { Storage } from '@google-cloud/storage';

// Creates a client from a Google service account key.
//const storage = new Storage({keyFilename: "cskeiso-google-cloud.json"});

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
//const bucketName = "cskeiso.appspot.com";
//const srcFilename = '/work/5_WAYS/FiveWays.json';
//const destFilename = './';

export async function downloadFile(srcFilename: string): Promise<void> {
    
}
/*
export async function downloadFile(srcFilename: string): Promise<void> {
    //TODO: will probably want to use absolute paths
    const options = {
        destination: destFilename,
    };
    // Downloads the file
    await storage.bucket(bucketName).file(srcFilename).download(options);
    console.log(
        `gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
    );
}
*/

//downloadFile(srcFilename).catch(console.error);