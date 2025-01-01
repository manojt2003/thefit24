// import { useEffect } from 'react';
// import { AnimatedSection } from '../../common/AnimatedSection';

// export function GoogleReviews() {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
//     script.defer = true;
//     document.body.appendChild(script);

//     // Add custom CSS to override the widget's default styles
//     const style = document.createElement('style');
//     style.textContent = `
//       .sk-ww-google-reviews {
//         background-color: #111 !important;
//       }
//       .sk-ww-google-reviews * {
//         background-color: #111 !important;
//         color: #fff !important;
//       }
//       .sk-ww-google-reviews .sk-ww-google-reviews-review {
//         background-color: #1a1a1a !important;
//         border: 1px solid #333 !important;
//       }
//       .sk-ww-google-reviews .sk-ww-google-reviews-review-text {
//         color: #ccc !important;
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       document.body.removeChild(script);
//       document.head.removeChild(style);
//     };
//   }, []);

//   return (
//     <section className="py-20 bg-black" id="reviews">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AnimatedSection className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">Google Reviews</h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             See what our members say about us
//           </p>
//         </AnimatedSection>
//         <div className="sk-ww-google-reviews" data-embed-id="25502622"></div>
//       </div>
//     </section>
//   );
// }

// 2

import { useEffect, useRef } from 'react';
import { AnimatedSection } from '../../common/AnimatedSection';

export function GoogleReviews() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Using an iframe for better isolation and performance
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!iframeDoc) return;

        // Add custom styles to the iframe content
        const style = iframeDoc.createElement('style');
        style.textContent = `
          body {
            background-color: #111 !important;
            margin: 0;
            padding: 0;
          }
          .sk-ww-google-reviews {
            background-color: #111 !important;
          }
          .sk-ww-google-reviews * {
            background-color: #111 !important;
            color: #fff !important;
          }
          .sk-ww-google-reviews .sk-ww-google-reviews-review {
            background-color: #1a1a1a !important;
            border: 1px solid #333 !important;
          }
          .sk-ww-google-reviews .sk-ww-google-reviews-review-text {
            color: #ccc !important;
          }
        `;
        iframeDoc.head.appendChild(style);
      } catch (e) {
        console.error('Failed to style iframe content:', e);
      }
    };

    iframe.addEventListener('load', handleLoad);

    return () => {
      iframe.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <section className="py-20 bg-black" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Google Reviews</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what our members say about us
          </p>
        </AnimatedSection>
        <div className="w-full aspect-video">
          <iframe
            ref={iframeRef}
            src="https://widgets.sociablekit.com/google-reviews/iframe/25502969"
            title="Google Reviews"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

// import { useEffect, useRef } from 'react';
// import { AnimatedSection } from '../../common/AnimatedSection';

// export function GoogleReviews() {
//   const iframeRef = useRef<HTMLIFrameElement>(null);

//   useEffect(() => {
//     const iframe = iframeRef.current;
//     if (!iframe) return;

//     const handleLoad = () => {
//       try {
//         const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
//         if (!iframeDoc) return;

//         // Enhanced dark mode styles
//         const style = iframeDoc.createElement('style');
//         style.textContent = `
//           body {
//             background-color: #030712 !important;
//             margin: 0;
//             padding: 0;
//           }
//           .sk-ww-google-reviews {
//             background-color: #030712 !important;
//           }
//           .sk-ww-google-reviews * {
//             background-color: #030712 !important;
//             color: #e5e7eb !important;
//           }
//           .sk-ww-google-reviews .sk-ww-google-reviews-review {
//             background-color: #111827 !important;
//             border: 1px solid #1f2937 !important;
//             box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
//           }
//           .sk-ww-google-reviews .sk-ww-google-reviews-review-text {
//             color: #9ca3af !important;
//           }
//           .sk-ww-google-reviews .sk-ww-google-reviews-stars {
//             color: #fbbf24 !important;
//           }
//         `;
//         iframeDoc.head.appendChild(style);
//       } catch (e) {
//         console.error('Failed to style iframe content:', e);
//       }
//     };

//     iframe.addEventListener('load', handleLoad);

//     return () => {
//       iframe.removeEventListener('load', handleLoad);
//     };
//   }, []);

//   return (
//     <section className="py-20 bg-gray-950" id="reviews">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AnimatedSection className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-50 mb-4">Google Reviews</h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             See what our members say about us
//           </p>
//         </AnimatedSection>
//         <div className="w-full aspect-video bg-gray-950 rounded-lg shadow-xl overflow-hidden">
//           <iframe
//             ref={iframeRef}
//             src="https://widgets.sociablekit.com/google-reviews/iframe/25502969"
//             title="Google Reviews"
//             className="w-full h-full border-0"
//             loading="lazy"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }