export interface Skill {
    name: string;
    icon: string;
    level: number;
    category: 'frontend' | 'backend' | 'database' | 'cloud';
    leadFocus: string; 
}