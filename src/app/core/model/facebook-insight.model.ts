import { IInsightBase, IInsightChart } from './insight.model';

export interface IFbInsightPayload {
  id: string;
  since: string;
  until: string;
  user_id: string;
}

export interface IMetrics {
  metrics: number[];
  total: number;
}

export interface IFbOverviewInsight extends IInsightBase {
  page_reach_avg: number;
  post_impressions_avg: number;
  post_reach_avg: number;
  engaged_users_summary: IMetrics;
  fan_adds_summary: IMetrics;
  fan_removes_summary: IMetrics;
  metric_dates: string[];
  negative_feedback_summary: IMetrics;
  page_consumptions_summary: IMetrics;
  page_impressions_avg: number;
  page_impressions_summary: IMetrics;
  page_reach_summary: IMetrics;
  post_impressions_summary: IMetrics;
  post_reach_summary: IMetrics;
  reactions_anger_summary: IMetrics;
  reactions_haha_summary: IMetrics;
  reactions_like_summary: IMetrics;
  reactions_love_summary: IMetrics;
  reactions_sorry_summary: IMetrics;
  reactions_wow_summary: IMetrics;
  video_views_summary: IMetrics;
  views_summary: IMetrics;
}

export interface IFbSinglePostInsight {
  id: string;
  post_comments_count: number;
  post_created_time: number;
  post_hash_tags: string[];
  post_hash_tags_count: number;
  post_insights: [
    {
      post_engaged_users: number;
      post_engaged_fan: number;
      post_impressions: number;
      post_impressions_unique: number;
      post_clicks: number;
      post_negative_feedback: number;
      post_reactions_like: number;
    }
  ];
  post_likes_count: number;
  post_permalink: string;
  post_reactions_count: number;
  post_shares_count: number;
  post_status: string;
  post_status_type: string;
}

export interface IFbPostInsight extends IInsightBase {
  total_clicks_count: number;
  total_comments_count: number;
  total_engaged_fans_count: number;
  total_engaged_users_count: number;
  total_hash_tags_count: number;
  total_impressions_count: number;
  total_likes_count: number;
  total_negative_feedback_count: number;
  total_reach_count: number;
  total_reactions_count: number;
  total_shares_count: number;
  single_posts: IFbSinglePostInsight[];
  total_posts_count: number;
}

export interface IFbSingleVideoInsight {
  insights: [
    {
      id: string,
      total_video_10s_views: number;
      total_video_15s_views: number;
      total_video_60s_excludes_shorter_views: number;
      total_video_avg_time_watched: number;
      total_video_complete_views: number;
      total_video_impressions: number;
      total_video_play_count: number;
      total_video_view_total_time: number;
      total_video_views: number;
    }
  ];
  total_comments: number;
  total_likes: number;
  video_created_time: string;
  video_description: string;
  video_length: number;
  video_permalink: string;
  video_thumbnail: string;
}

export interface IFbVideoInsight extends IInsightBase {
  page_video_complete_views_30s: IInsightChart;
  page_video_complete_views_30s_autoplayed: IInsightChart;
  page_video_complete_views_30s_click_to_play: IInsightChart;
  page_video_complete_views_30s_organic: IInsightChart;
  page_video_complete_views_30s_paid: IInsightChart;
  page_video_complete_views_30s_repeat_views: IInsightChart;
  page_video_complete_views_30s_unique: IInsightChart;
  page_video_repeat_views: IInsightChart;
  page_video_views: IInsightChart;
  page_video_views_10s: IInsightChart;
  page_video_views_10s_autoplayed: IInsightChart;
  page_video_views_10s_click_to_play: IInsightChart;
  page_video_views_10s_organic: IInsightChart;
  page_video_views_10s_paid: IInsightChart;
  page_video_views_10s_repeat: IInsightChart;
  page_video_views_10s_unique: IInsightChart;
  page_video_views_autoplayed: IInsightChart;
  page_video_views_click_to_play: IInsightChart;
  page_video_views_organic: IInsightChart;
  page_video_views_paid: IInsightChart;
  page_video_views_unique: IInsightChart;
  single_videos: IFbSingleVideoInsight[]
}

export interface IFbPerformanceInsight extends IInsightBase {
  page_call_phone_clicks_logged_in_unique: IInsightChart;
  page_get_directions_clicks_logged_in_unique: IInsightChart;
  page_tab_views_login_top: IInsightChart;
  page_total_actions: IInsightChart;
  page_views_logged_in_total: IInsightChart;
  page_views_logout: IInsightChart;
  page_website_clicks_logged_in_unique: IInsightChart;
}

export interface IFbInsight {
  id?: string;
  overview: IFbOverviewInsight;
  performance: IFbPerformanceInsight;
  posts: IFbPostInsight;
  videos: IFbVideoInsight;
}
