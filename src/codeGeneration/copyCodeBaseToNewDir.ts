import execa = require('execa');

const fs = require('fs-extra')

export async function copyCodeBaseToNewDir(codeDir: string, newDir: string) {
  const isCodeDir = await fs.pathExists(codeDir)

  if (!isCodeDir) {
    throw new Error(`the directory ${codeDir} does not exist. Please confirm it or create it separately`)
  }

  // try {
  //   await fs.copy(baseApp, testAppDir)
  //   console.log('success!')
  // } catch (err) {
  //   console.error(err)
  // }
  await execa(
    'cp',
    ['-r', codeDir, newDir],
  ).catch(
    (error: any) => {
      throw new Error(`error copying over from ${codeDir}: ${error}`)
    },
  )
}
