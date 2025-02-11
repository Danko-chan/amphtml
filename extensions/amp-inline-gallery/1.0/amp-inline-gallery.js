import {Layout_Enum} from '#core/dom/layout';

import {isExperimentOn} from '#experiments';

import {userAssert} from '#utils/log';

import {
  AmpInlineGalleryPagination,
  TAG as PAGINATION_TAG,
} from './amp-inline-gallery-pagination';
import {
  AmpInlineGalleryThumbnails,
  TAG as THUMBNAILS_TAG,
} from './amp-inline-gallery-thumbnails';
import {BaseElement} from './base-element';

import {CSS as PAGINATION_CSS} from '../../../build/amp-inline-gallery-pagination-1.0.css';

/** @const {string} */
const TAG = 'amp-inline-gallery';

class AmpInlineGallery extends BaseElement {
  /** @override */
  isLayoutSupported(layout) {
    userAssert(
      isExperimentOn(this.win, 'bento') ||
        isExperimentOn(this.win, 'bento-inline-gallery'),
      'expected global "bento" or specific "bento-inline-gallery" experiment to be enabled'
    );
    return layout == Layout_Enum.CONTAINER;
  }
}

AMP.extension(TAG, '1.0', (AMP) => {
  AMP.registerElement(TAG, AmpInlineGallery);
  AMP.registerElement(
    PAGINATION_TAG,
    AmpInlineGalleryPagination,
    PAGINATION_CSS
  );
  AMP.registerElement(THUMBNAILS_TAG, AmpInlineGalleryThumbnails);
});
