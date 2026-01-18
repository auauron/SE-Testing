import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ArticleModal from '../components/ArticleModal';
import { Article } from '../types/guide';

const meta = {
  title: 'Components/ArticleModal',
  component: ArticleModal,
} satisfies Meta<typeof ArticleModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock article with full content (sections with points)
const fullArticle: Article = {
  id: '1',
  title: 'Essential Nutrition During Pregnancy',
  image: '/assets/pregnancyArticle/nutrition.jpg',
  category: 'Pregnancy',
  section: 'Health & Wellness',
  externalLink: 'https://example.com/full-article',
  content: {
    headline: 'Essential Nutrition During Pregnancy: A Complete Guide',
    intro: 'Proper nutrition during pregnancy is vital for both your health and your baby\'s development. This comprehensive guide covers everything you need to know about eating well during this special time.',
    sections: [
      {
        title: 'Key Nutrients You Need',
        content: 'During pregnancy, your body requires additional nutrients to support your growing baby.',
        points: [
          'Folic acid: Essential for neural tube development (400-800 mcg daily)',
          'Iron: Supports increased blood volume (27 mg daily)',
          'Calcium: Builds strong bones and teeth (1,000 mg daily)',
          'DHA: Supports brain and eye development (200-300 mg daily)',
          'Protein: Essential for tissue growth (75-100 g daily)',
        ],
      },
      {
        title: 'Foods to Include',
        content: 'Focus on nutrient-dense whole foods for optimal health.',
        points: [
          'Leafy greens like spinach and kale for folate and iron',
          'Lean proteins such as chicken, fish, and legumes',
          'Dairy products for calcium and vitamin D',
          'Whole grains for fiber and B vitamins',
          'Colorful fruits and vegetables for antioxidants',
        ],
      },
      {
        title: 'Foods to Avoid',
        content: 'Some foods pose risks during pregnancy and should be limited or avoided.',
        points: [
          'Raw or undercooked meats and seafood',
          'Unpasteurized dairy products',
          'High-mercury fish (shark, swordfish, king mackerel)',
          'Excessive caffeine (limit to 200mg daily)',
          'Alcohol in any amount',
        ],
      },
    ],
    source: 'American College of Obstetricians and Gynecologists',
  },
};

// Mock article with minimal content
const minimalArticle: Article = {
  id: '2',
  title: 'Quick Tips for New Moms',
  image: '/assets/postpartumArticle/tips.jpg',
  category: 'Postpartum',
  section: 'Self-Care',
};

// Mock article with partial content (no sections)
const partialArticle: Article = {
  id: '3',
  title: 'Understanding Baby Sleep Patterns',
  image: '/assets/earlyChildcareArticle/sleep.jpg',
  category: 'Early Childcare',
  section: 'Sleep',
  content: {
    headline: 'Understanding Your Baby\'s Sleep: What to Expect',
    intro: 'Newborn sleep can be unpredictable and challenging for new parents. Understanding what\'s normal can help you navigate this phase with more confidence and less stress.',
  },
};

/**
 * Full Content Story
 * Displays an article with complete content including headline, intro, multiple sections with points, and an external link.
 * Use this to test the full rendering capabilities of the modal.
 */
export const FullContent: Story = {
  args: {
    article: fullArticle,
    isOpen: true,
    onClose: () => {},
  },
};

/**
 * Minimal Content Story
 * Displays an article with only basic required fields (title, image, category, section).
 * Tests fallback behavior when content is missing.
 */
export const MinimalContent: Story = {
  args: {
    article: minimalArticle,
    isOpen: true,
    onClose: () => {},
  },
};

/**
 * Partial Content Story
 * Displays an article with headline and intro but no sections.
 * Tests the empty sections state.
 */
export const PartialContent: Story = {
  args: {
    article: partialArticle,
    isOpen: true,
    onClose: () => {},
  },
};




