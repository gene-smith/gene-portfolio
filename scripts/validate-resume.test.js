import { describe, it, expect } from 'vitest'
import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'

const RESUME_PATH = path.join(process.cwd(), 'public', 'resume.yaml')

describe('Resume Data Validation', () => {
  let resumeData

  // Load the resume data once before running tests
  try {
    const yamlContent = fs.readFileSync(RESUME_PATH, 'utf8')
    resumeData = yaml.load(yamlContent)
  } catch (error) {
    console.error('Failed to load resume.yaml for testing:', error)
  }

  describe('Certifications Section', () => {
    it('should include Google Generative AI Leader Certification', () => {
      expect(resumeData).toBeDefined()
      expect(resumeData.certifications).toBeDefined()
      expect(Array.isArray(resumeData.certifications)).toBe(true)

      const googleGenAICert = resumeData.certifications.find(
        cert =>
          cert.title === 'Google Generative AI Leader Certification' &&
          cert.issuer === 'Google Cloud' &&
          cert.year === '2026'
      )

      expect(googleGenAICert).toBeDefined()
      expect(googleGenAICert.title).toBe(
        'Google Generative AI Leader Certification'
      )
      expect(googleGenAICert.issuer).toBe('Google Cloud')
      expect(googleGenAICert.year).toBe('2026')
    })

    it('should have valid certification structure', () => {
      expect(resumeData.certifications).toBeDefined()

      resumeData.certifications.forEach(cert => {
        expect(cert).toHaveProperty('title')
        expect(cert).toHaveProperty('issuer')
        expect(cert).toHaveProperty('year')
        expect(typeof cert.title).toBe('string')
        expect(typeof cert.issuer).toBe('string')
        expect(typeof cert.year).toBe('string')
      })
    })
  })

  describe('Skills Section', () => {
    it('should include Gemini skill', () => {
      expect(resumeData).toBeDefined()
      expect(resumeData.skills).toBeDefined()
      expect(Array.isArray(resumeData.skills)).toBe(true)

      const hasGeminiSkill = resumeData.skills.includes('Gemini')

      expect(hasGeminiSkill).toBe(true)
    })

    it('should have valid skills array structure', () => {
      expect(resumeData.skills).toBeDefined()
      expect(Array.isArray(resumeData.skills)).toBe(true)
      expect(resumeData.skills.length).toBeGreaterThan(0)

      resumeData.skills.forEach(skill => {
        expect(typeof skill).toBe('string')
        expect(skill.length).toBeGreaterThan(0)
      })
    })
  })

  describe('Overall Resume Structure', () => {
    it('should have all required sections', () => {
      const requiredSections = [
        'experience',
        'education',
        'skills',
        'certifications',
      ]

      requiredSections.forEach(section => {
        expect(resumeData).toHaveProperty(section)
        expect(Array.isArray(resumeData[section])).toBe(true)
      })
    })

    it('should have non-empty sections', () => {
      expect(resumeData.experience.length).toBeGreaterThan(0)
      expect(resumeData.education.length).toBeGreaterThan(0)
      expect(resumeData.skills.length).toBeGreaterThan(0)
      expect(resumeData.certifications.length).toBeGreaterThan(0)
    })
  })
})
