function firstletter_posts_where( $where, $query ) {
global $wpdb;

$starts_with = esc_sql( $query->get( 'starts_with' ) );

if ( $starts_with ) {
if ($starts_with == 'num'){
$where .= " AND $wpdb->posts.post_title REGEXP '^[0-9]'";
} else {
$where .= " AND $wpdb->posts.post_title LIKE '$starts_with%'";
}
}

return $where;
}
add_filter( 'posts_where', 'firstletter_posts_where', 10, 2 );