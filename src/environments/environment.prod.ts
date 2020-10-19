/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

export const environment = {
  api_base_uri: 'https://localhost:3000/api/v1.0.0/',
  production: true,
  secret: {
    number_of_rounds: 10,
    secret_key: 'va#_-w,X+b/c%)b~Wg_z5%dXe8%99&Q-'
  },
  social_platform: {
    facebook: {
      client_id: '466314977585281',
      client_secret: '8628ebbe08dab12d34b5860df4336037',
      dialog_api: 'https://www.facebook.com/v8.0/dialog/oauth',
      scope: `read_insights,publish_video,pages_show_list,ads_read,business_management,
        publish_to_groups,groups_access_member_info,pages_read_engagement,pages_manage_metadata,
        pages_read_user_content,pages_manage_ads,pages_manage_posts,pages_manage_engagement,public_profile,
        instagram_basic,instagram_manage_comments,instagram_manage_insights`
    },
    redirect_base_url: 'https://localhost:5000/connection'
  },
  version: require('../../package.json').version
};
