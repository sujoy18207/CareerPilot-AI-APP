# Implementation Plan - Fix Voice Assistant, Model Fetching, and UI Responsiveness

This plan addresses the identified issues in the Career Pilot app:
1.  **Voice Assistant**: Missing Android permissions and robustness improvements.
2.  **Study Hub / Model Fetching**: Hardcoded models in the UI; now fetching models dynamically from the provider.
3.  **UI Responsiveness**: Adjusting breakpoints and layout behavior for a better app-like experience.

## User Review Required

> [!IMPORTANT]
> The Voice Assistant requires manual permission approval on the device. I will add the necessary permissions to `AndroidManifest.xml`, but the user will still see a system prompt when first using the feature.

> [!NOTE]
> For dynamic model fetching, the app will attempt to list models from the configured LLM provider (ZenMux, Gemini, or OpenAI). If the API key doesn't have "list models" permission, it will fall back to the defaults.

## Proposed Changes

### [Android Configuration]

#### [MODIFY] [AndroidManifest.xml](file:///C:/Users/SUJOY/OneDrive/Pictures/Screenshots/careerpilotAPP/AI-career-advisor-main/android/app/src/main/AndroidManifest.xml)
- Add `RECORD_AUDIO` and `MODIFY_AUDIO_SETTINGS` permissions.

---

### [Backend / LLM Integration]

#### [MODIFY] [llm.ts](file:///C:/Users/SUJOY/OneDrive/Pictures/Screenshots/careerpilotAPP/AI-career-advisor-main/lib/llm.ts)
- Add `listLlmModels()` function to fetch available models from the provider.
- Update `getLlmModel()` to handle a wider range of model names.

#### [NEW] [route.ts](file:///C:/Users/SUJOY/OneDrive/Pictures/Screenshots/careerpilotAPP/AI-career-advisor-main/app/api/ai-hub/models/route.ts)
- Create an API endpoint to expose the model list to the frontend.

---

### [Frontend / UI]

#### [MODIFY] [UnifiedChat.tsx](file:///C:/Users/SUJOY/OneDrive/Pictures/Screenshots/careerpilotAPP/AI-career-advisor-main/components/ai-hub/UnifiedChat.tsx)
- Fetch models from `/api/ai-hub/models` on mount.
- Update `ModelPicker` to display the fetched models dynamically.
- Improve mobile responsiveness by adjusting the `isMobile` threshold and layout styles.

#### [MODIFY] [useVoice.ts](file:///C:/Users/SUJOY/OneDrive/Pictures/Screenshots/careerpilotAPP/AI-career-advisor-main/components/voice/useVoice.ts)
- Improve error handling for microphone access.
- Add checks for `navigator.mediaDevices` availability.

---

## Verification Plan

### Automated Tests
- Not applicable (UI/Device behavior).

### Manual Verification
1.  **Voice Assistant**: Open the app on an Android device, tap the microphone, and verify the system asks for permission and successfully transcribes.
2.  **Model Fetching**: Open the AI Study Hub, click the model picker, and verify that it shows models from the configured API (e.g., if ZenMux is used, show ZenMux models).
3.  **UI Responsiveness**: Resize the browser or use a mobile emulator to verify the sidebar/layout adapts correctly.
