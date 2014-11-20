/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2014-11-20 12:00:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `s_admins`
-- ----------------------------
DROP TABLE IF EXISTS `s_admins`;
CREATE TABLE `s_admins` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '记录ID',
  `user_name` varchar(30) NOT NULL COMMENT '账号名称',
  `user_pwd` varchar(30) NOT NULL COMMENT '账号密码',
  `user_power` int(10) unsigned NOT NULL DEFAULT '10000' COMMENT '权限标识，0为超级管理员',
  `is_lock` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否锁定：0为正常；1为锁定',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='管理员信息表';

-- ----------------------------
-- Records of s_admins
-- ----------------------------

-- ----------------------------
-- Table structure for `s_article`
-- ----------------------------
DROP TABLE IF EXISTS `s_article`;
CREATE TABLE `s_article` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '文章记录ID',
  `title` varchar(200) NOT NULL COMMENT '文章标题',
  `abstract` varchar(600) DEFAULT NULL COMMENT '文章摘要',
  `content` text NOT NULL COMMENT '文章内容',
  `hit` int(11) NOT NULL DEFAULT '0' COMMENT '点击量/阅读数',
  `tags` varchar(100) DEFAULT NULL COMMENT 'tags标签',
  `source` varchar(100) NOT NULL DEFAULT '' COMMENT '文章来源',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `edit_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `article_type_id` int(11) NOT NULL COMMENT '文章所属的类目ID',
  `is_lock` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否锁定：0为正常；1为锁定',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='文章表';

-- ----------------------------
-- Records of s_article
-- ----------------------------

-- ----------------------------
-- Table structure for `s_article_type`
-- ----------------------------
DROP TABLE IF EXISTS `s_article_type`;
CREATE TABLE `s_article_type` (
  `article_type_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '文章类别ID',
  `article_type_name` varchar(30) NOT NULL COMMENT '文章类别名称',
  PRIMARY KEY (`article_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='文章类目表';

-- ----------------------------
-- Records of s_article_type
-- ----------------------------

-- ----------------------------
-- Table structure for `s_friendlinks`
-- ----------------------------
DROP TABLE IF EXISTS `s_friendlinks`;
CREATE TABLE `s_friendlinks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `site_name` varchar(30) NOT NULL COMMENT '站点名称',
  `site_url` varchar(50) NOT NULL COMMENT '站点地址',
  `is_lock` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否锁定：0为正常；1为锁定',
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='友情链接表';

-- ----------------------------
-- Records of s_friendlinks
-- ----------------------------

-- ----------------------------
-- Table structure for `u_users`
-- ----------------------------
DROP TABLE IF EXISTS `u_users`;
CREATE TABLE `u_users` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '记录ID',
  `user_name` varchar(30) NOT NULL COMMENT '账号名称',
  `user_pwd` varchar(30) NOT NULL COMMENT '账号密码',
  `user_nick` varchar(30) NOT NULL COMMENT '用户昵称',
  `user_head` varchar(50) NOT NULL DEFAULT 'default.jpg' COMMENT '用户头像',
  `reg_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '注册时间',
  `last_login_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后登录时间',
  `is_lock` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否锁定：0为正常；1为锁定',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';

-- ----------------------------
-- Records of u_users
-- ----------------------------

-- ----------------------------
-- Table structure for `u_user_comment`
-- ----------------------------
DROP TABLE IF EXISTS `u_user_comment`;
CREATE TABLE `u_user_comment` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '记录ID',
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `comment_content` text NOT NULL COMMENT '评论内容',
  `comment_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '评论时间',
  `artilce_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '评论的文章ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户评论表';

-- ----------------------------
-- Records of u_user_comment
-- ----------------------------

-- ----------------------------
-- View structure for `v_article`
-- ----------------------------
DROP VIEW IF EXISTS `v_article`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`127.0.0.1` SQL SECURITY DEFINER VIEW `v_article` AS select `s_article`.`id` AS `id`,`s_article`.`title` AS `title`,`s_article`.`abstract` AS `abstract`,`s_article`.`hit` AS `hit`,`s_article`.`tags` AS `tags`,`s_article`.`source` AS `source`,`s_article`.`edit_time` AS `edit_time`,`s_article_type`.`article_type_name` AS `article_type_name` from (`s_article` join `s_article_type`) where (`s_article`.`article_type_id` = `s_article_type`.`article_type_id`) ;

-- ----------------------------
-- View structure for `v_user_comment`
-- ----------------------------
DROP VIEW IF EXISTS `v_user_comment`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`127.0.0.1` SQL SECURITY DEFINER VIEW `v_user_comment` AS select `u_users`.`user_nick` AS `user_nick`,`u_users`.`user_head` AS `user_head`,`u_user_comment`.`comment_content` AS `comment_content`,`u_user_comment`.`comment_time` AS `comment_time` from (`u_users` join `u_user_comment`) ;
