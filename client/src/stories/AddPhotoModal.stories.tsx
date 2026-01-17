import type { Meta, StoryObj } from '@storybook/react-webpack5';

import AddPhotoModal from '../components/journal/AddPhotoModal';

const meta: Meta<typeof AddPhotoModal> = {
  component: AddPhotoModal,
  title: 'Journal/AddPhotoModal',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A modal component for uploading photos to the journal. Supports multiple file selection with names and notes.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-100 font-poppins">
        <Story />
      </div>
    ),
  ],
  args: {
    onClose: () => console.log('Modal closed'),
    onAdd: async () => true,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default state of the modal - empty, ready to receive photos.
 * Users can click the upload area to select photos.
 */
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Empty State**: The initial state of the modal when opened. Click the upload area to select photos.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-100 font-poppins">
        <div className="absolute top-2 left-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-[100]">
          Select photos to upload
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * Simulates a successful upload scenario.
 * The onAdd callback resolves to true after a short delay.
 */
export const SuccessfulUpload: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Success Scenario**: Upload succeeds after 1 second delay. Check console for uploaded photos data.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-100 font-poppins">
        <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-[100]">
          ✅ Success Mode - Upload will succeed (1s delay)
        </div>
        <Story />
      </div>
    ),
  ],
  args: {
    onAdd: async (photos) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('✅ Photos uploaded successfully:', photos);
      alert(`Success! ${photos.length} photo(s) uploaded.`);
      return true;
    },
  },
};

/**
 * Simulates a failed upload scenario.
 * The onAdd callback resolves to false, indicating upload failure.
 */
export const FailedUpload: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Failure Scenario**: Upload fails after 1 second delay. Returns false to indicate failure.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-100 font-poppins">
        <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-[100]">
          ❌ Failure Mode - Upload will fail (1s delay)
        </div>
        <Story />
      </div>
    ),
  ],
  args: {
    onAdd: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('❌ Upload failed');
      alert('Upload failed! Please try again.');
      return false;
    },
  },
};