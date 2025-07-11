# WeChat Mini Program - UGC Social Media Tool

This WeChat Mini Program is designed to help users create engaging social media content by automatically generating descriptions for uploaded images.

## Features

### 🎯 UGC Social Media Content Generator
- **Automatic Description Generation**: Upload any photo and the AI will automatically generate compelling social media content
- **Multi-Platform Ready**: Content optimized for Instagram, Facebook, TikTok, and other social platforms
- **Hashtag Integration**: Automatically includes relevant hashtags for better discoverability
- **Real-time Processing**: Instant generation of content with loading indicators

## How to Use

1. **Upload an Image**: Tap the camera icon or "UGC" button in the toolbar
2. **Automatic Processing**: The app will upload your image and generate content automatically
3. **Get Your Content**: The AI will provide a complete social media post description with hashtags
4. **Copy & Share**: Use the generated content directly on your social media platforms

## Technical Implementation

### Frontend (WeChat Mini Program)
- **Image Upload**: Uses WeChat's `chooseImage` API with cloud storage
- **UI Components**: Custom agent-ui component with image preview
- **Real-time Updates**: Automatic chat interface updates with generated content

### Backend (Cloud Functions)
- **Zhipu AI Integration**: Uses Zhipu's GLM-4V model for image analysis
- **Vision API**: Processes images and generates contextual social media content
- **Error Handling**: Comprehensive error handling with user feedback

### AI Prompt Engineering
The system uses a specialized prompt to generate engaging social media content:
```
"Generate a compelling social media post description for this image. Focus on creating engaging, shareable content that would work well on platforms like Instagram, Facebook, or TikTok. Include relevant hashtags and make it sound natural and appealing."
```

## Setup Instructions

1. **Cloud Function Deployment**: Ensure the `zhipu` cloud function is deployed
2. **API Keys**: Configure your Zhipu AI API key in the cloud function
3. **Cloud Storage**: Enable cloud storage for image uploads
4. **WeChat Developer Tools**: Open the project in WeChat Developer Tools

## File Structure

```
miniprogram-3/
├── cloudfunctions/
│   └── zhipu/                    # AI integration cloud function
├── miniprogram/
│   ├── components/
│   │   └── agent-ui/            # Main UI component with UGC features
│   └── pages/
│       └── chatBot/             # Main chat interface
```

## API Configuration

The system uses Zhipu's GLM-4V model for image analysis and content generation. The cloud function handles:
- Image URL processing
- AI API communication
- Response formatting
- Error handling

## Future Enhancements

- **Content Templates**: Pre-defined templates for different social platforms
- **Brand Voice Customization**: Allow users to set brand tone and style
- **Batch Processing**: Handle multiple images at once
- **Content Scheduling**: Integration with social media scheduling tools
- **Analytics**: Track content performance and engagement

## Support

For technical support or feature requests, please refer to the WeChat Mini Program documentation and cloud function deployment guides.
