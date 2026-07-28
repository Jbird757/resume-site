import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import About from '../components/About';
import Footer from '../components/Footer';
import HomeHeader from '../components/HomeHeader';
import ViewResume from '../components/ViewResume';
import ProjectContents from '../components/ProjectContents';
import ResumeContents from '../components/ResumeContents';

describe('UI Component Unit Tests', () => {
  describe('About Component', () => {
    it('renders About Me header and social links', () => {
      render(<About />);
      expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
      expect(screen.getAllByText(/Jay Lowry/i).length).toBeGreaterThan(0);
    });
  });

  describe('Footer Component', () => {
    it('renders copyright notice and social icons', () => {
      render(<Footer />);
      expect(screen.getByText(/Copyright © Jay Lowry/i)).toBeInTheDocument();
    });
  });

  describe('HomeHeader Component', () => {
    it('renders header text and navigation buttons', () => {
      render(
        <MemoryRouter>
          <HomeHeader />
        </MemoryRouter>
      );
      expect(screen.getByRole('heading', { name: /Bringing innovation to everyone/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Resume/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument();
    });
  });

  describe('ViewResume Component', () => {
    it('renders Download Resume button and handles click event', () => {
      const windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => {});
      render(<ViewResume />);
      const button = screen.getByText(/Download Resume/i);
      expect(button).toBeInTheDocument();

      fireEvent.click(button);
      expect(windowOpenSpy).toHaveBeenCalledWith('JLResume.pdf', '_blank');
      windowOpenSpy.mockRestore();
    });
  });

  describe('ProjectContents Component', () => {
    it('renders project cards from JSON data', () => {
      render(<ProjectContents />);
      expect(screen.getByRole('heading', { level: 1, name: /Projects/i })).toBeInTheDocument();
      expect(screen.getAllByText(/This Website/i).length).toBeGreaterThan(0);
      expect(screen.getByText(/Terraform Serverless Website Module/i)).toBeInTheDocument();
    });
  });

  describe('ResumeContents Component', () => {
    it('renders experience, education, and skills sections', () => {
      render(<ResumeContents />);
      expect(screen.getByRole('heading', { level: 1, name: /Resume/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2, name: /Experience/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2, name: /Education/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 3, name: /Languages & Technologies/i })).toBeInTheDocument();
      expect(screen.getAllByText(/Brigham Young University/i).length).toBeGreaterThan(0);
    });
  });
});
