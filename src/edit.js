/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes, context }) {
	const blockProps = useBlockProps();

	const post = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPost(),
		[]
	);
	// Check if post.acf is available
	if (post && post.acf) {
		setAttributes( { name: post.acf.name } );
		setAttributes( { position: post.acf.position } );
		setAttributes( { content: post.acf.content } );
	}

	return (
		<div className='wp-block-create-block-custom-gutenberg-block' { ...blockProps }>
			<RichText
				tagName="div"
				className='testimonial-content'
				value={ attributes.content }
			/>
			<div className='testimonial-footer'>
				<RichText 
					tagName="span"
					className='testimonial-name'
					value={ attributes.name }
				/>
				<RichText 
					tagName="span"
					className='testimonial-position'
					value={ attributes.position }
				/>
			</div>
		</div>
	);
}
