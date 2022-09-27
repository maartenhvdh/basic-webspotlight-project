import {
    DomElementOptionsType,
    ResolversType,
    RichTextElement,
  } from '@kontent-ai/react-components';
  import React from 'react';
  import { Link } from 'react-router-dom';
  import {
    ElementModels,
    Elements,
    IContentItem,
    ILink,
    IRichTextImage,
  } from '@kontent-ai/delivery-sdk';
import { Faq } from 'models/faq';
import { FaqAccordion } from './faq-accordion';
  
  interface RichTextProps {
    element: Elements.RichTextElement;
    className?: string;
  }
  
  const RichText: React.FC<RichTextProps> = (props) => {
    const resolvers: ResolversType = {
      resolveLinkedItem: (
        linkedItem: IContentItem | undefined,
        domOptions: DomElementOptionsType
      ) => {
        const contentItemType = linkedItem ? linkedItem.system.type : '';
  
        switch (contentItemType) {
        case 'faq': {
            const faq = linkedItem as Faq;
            return (<div
                data-kontent-component-id={faq.system.id}
                data-kontent-add-button
                data-kontent-add-button-render-position="bottom"
                data-kontent-add-button-insert-position="after">
                <FaqAccordion
                    question={faq.elements.question.value}
                    answer={faq.elements.answer}
                />
            </div>
            );
            break;
        }
          default:
            return <div>Content item not supported</div>;
        }
      },
      resolveLink: (link: ILink, domOptions: DomElementOptionsType) => { 
        return (
            <a href={`/${link.type}/${link.urlSlug}`}>
            {domOptions.domToReact(domOptions.domElement.children)}
          </a>
        );
      },
      resolveImage: (
        image: IRichTextImage,
        domOptions: DomElementOptionsType
      ) => {
        return (
          <img
            className="xImage"
            src={`${image.url}`}
            alt={`${image.description || `image with id: ${image.imageId}`}`}
          />
        );
      },
      resolveDomNode: undefined,
    };
  
    return (
      <div className={props.className}>
        <RichTextElement richTextElement={props.element} resolvers={resolvers} />
      </div>
    );
  };
  
  export default RichText;