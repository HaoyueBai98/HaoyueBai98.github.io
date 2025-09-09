---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## 教育背景
* 请在此处添加您的教育背景信息

## 工作经历
* 请在此处添加您的工作经历信息

## 研究兴趣
* 请在此处添加您的研究兴趣

## 技能
* 请在此处添加您的技能信息

## 发表论文
{% if site.publications.size > 0 %}
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
{% else %}
  <p>暂无发表论文</p>
{% endif %}

## 学术报告
{% if site.talks.size > 0 %}
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
{% else %}
  <p>暂无学术报告</p>
{% endif %}

## 教学工作
{% if site.teaching.size > 0 %}
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
{% else %}
  <p>暂无教学经历</p>
{% endif %}

## 服务与领导
* 请在此处添加您的服务与领导经历
