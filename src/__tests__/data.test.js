import { describe, it, expect } from 'vitest';
import resumeData from '../data/resume.json';
import projectsData from '../data/projects.json';

describe('Data Layer Integrity Tests', () => {
  describe('resume.json', () => {
    it('contains experience array with valid items', () => {
      expect(Array.isArray(resumeData.experience)).toBe(true);
      expect(resumeData.experience.length).toBeGreaterThan(0);
      resumeData.experience.forEach((item) => {
        expect(item).toHaveProperty('id');
        expect(item).toHaveProperty('period');
        expect(item).toHaveProperty('role');
        expect(item).toHaveProperty('company');
        expect(item).toHaveProperty('location');
        expect(item).toHaveProperty('description');
      });
    });

    it('contains education array with valid items', () => {
      expect(Array.isArray(resumeData.education)).toBe(true);
      expect(resumeData.education.length).toBeGreaterThan(0);
      resumeData.education.forEach((item) => {
        expect(item).toHaveProperty('id');
        expect(item).toHaveProperty('period');
        expect(item).toHaveProperty('degree');
        expect(item).toHaveProperty('institution');
        expect(item).toHaveProperty('location');
      });
    });

    it('contains skills array', () => {
      expect(Array.isArray(resumeData.skills)).toBe(true);
      expect(resumeData.skills.length).toBeGreaterThan(0);
    });

    it('contains languagesAndTech array', () => {
      expect(Array.isArray(resumeData.languagesAndTech)).toBe(true);
      expect(resumeData.languagesAndTech.length).toBeGreaterThan(0);
    });
  });

  describe('projects.json', () => {
    it('contains valid project cards', () => {
      expect(Array.isArray(projectsData)).toBe(true);
      expect(projectsData.length).toBeGreaterThan(0);
      projectsData.forEach((project) => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('imageKey');
        expect(project).toHaveProperty('imageAlt');
        expect(project).toHaveProperty('description');
      });
    });
  });
});
