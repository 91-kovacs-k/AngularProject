export interface changeLogEntry{
    type: 'major' | 'minor' | 'patch';
    oldValue: number;
    newValue: number;
}