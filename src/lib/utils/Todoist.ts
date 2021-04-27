import Todoist from 'todoist-rest-api'

const tmp = Todoist('5bdb5135a9446e91f6603faa2b702040cb91ccdf').v1

export async function getProjects(): Promise<any> {
  try {
    return tmp.project.findAll({})
  } catch (err) { return err }
}

