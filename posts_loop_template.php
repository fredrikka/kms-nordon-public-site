<!-- NOTE: If you need to make changes to this file, copy it to your current theme's main
	directory so your changes won't be overwritten when the plugin is upgraded. -->

<!-- Start of Post Wrap -->
<div class="post hentry ivycat-post">
	<!-- This is the output of the post TITLE -->
	<h4 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>

	<!-- This is the output of the EXCERPT -->
	<div class="entry-summary">
		<?php the_excerpt(); ?>
	</div>
	<!-- This is the output of the META information -->
<!--
	<div class="entry-summary">
		<?php if ( count( get_the_category() ) ) : ?>
			<span class="entry-summary">
				<?php printf( __( '<span class="%1$s">Kategorier</span> %2$s', 'twentysixteen-child' ), 'entry-utility-prep entry-utility-prep-cat-links', get_the_category_list( ', ' ) ); ?>
			</span>
		<?php endif; ?>
	</div>
-->
</div>
<!-- // End of Post Wrap -->
