/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Internal dependencies
 */
import * as accessibilityWarnings from './accessibility';
import * as distributionWarnings from './distribution';

export const async = {
  page: [accessibilityWarnings.pageBackgroundTextLowContrast],
};

export default {
  story: [distributionWarnings.storyMissingExcerpt],
  page: [accessibilityWarnings.pageTooManyLinks],
  text: [
    accessibilityWarnings.textElementFontLowContrast,
    accessibilityWarnings.textElementFontSizeTooSmall,
    accessibilityWarnings.elementLinkTappableRegionTooSmall,
  ],
  image: [
    accessibilityWarnings.imageElementLowResolution,
    accessibilityWarnings.imageElementMissingAlt,
    accessibilityWarnings.elementLinkTappableRegionTooSmall,
  ],
  shape: [accessibilityWarnings.elementLinkTappableRegionTooSmall],
  gif: [
    accessibilityWarnings.imageElementLowResolution,
    accessibilityWarnings.imageElementMissingAlt,
    accessibilityWarnings.elementLinkTappableRegionTooSmall,
  ],
  video: [
    accessibilityWarnings.videoElementMissingTitle,
    accessibilityWarnings.videoElementMissingAlt,
    accessibilityWarnings.videoElementMissingCaptions,
    accessibilityWarnings.elementLinkTappableRegionTooSmall,
  ],
};
