import versions from './versions.json'

export function getLatestVersion() {
    return versions.length == 0 ? 'current':versions[0];
}

export function getFourLatestVersion() {
    if (versions.length == 0) {
        return ['current']
    }

    let latest_versions = []

    for (let i = 0; i < 4; i++) {
        if (i < versions.length) {
            latest_versions.push(versions[i])
        }
    }

    return latest_versions;
}
