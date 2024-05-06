---
layout: default
title: Home
---

<div class="home">
    <div class="head">
        <div class="left">
            <div class="myself">
                <div class="salutation">
                    Hey There,
                </div>
                <div class="name">
                    I'm Aswanth
                </div>
                <div class="description">
                    {{ site.data.about | map: 'description' | join: ''}}
                </div>
            </div>
            <div class="github-status">
                <div class="icon">
                    <i class="bx bxl-github"></i>
                </div>
                <div class="content">
                    <div class="data">
                        <span class="number">
                            150+
                        </span>
                        <span class="name">
                            Pull Requests
                        </span>
                    </div>
                    <div class="data">
                        <span class="number">
                            1.3k+
                        </span>
                        <span class="name">
                            Commits
                        </span>
                    </div>
                    <div class="data">
                        <span class="number">
                            15+
                        </span>
                        <span class="name">
                            Issues
                        </span>
                    </div>
                </div>
            </div>
        </div>
            <div class="socials">
                {% for item in site.data.socials %}
                    <a href="{{item.url}}"><i class="{{item.icon}}"></i></a>
                {% endfor %}
            </div>
        <div class="right">
            <div class="status">
                <div class="message">
                    {% for item in site.data.about %}
                        <span class="msg">{{ item.status }}</span>
                    {% endfor %}
                </div>
                <img src="{{ 'assets/chat-status.svg' | relative_url }}" />
            </div>
            <img src="{{ 'assets/aswanthvc.png' | relative_url }}"/>
        </div>
    </div>
    <div class="skills">
    <div id="skills" class="wrapper">
        {% for item in site.data.skills %}
            <div class="skill">
                <i class="{{item.icon}}"></i>
                <span class="name">{{ item.name }}</span>
            </div>
        {% endfor %}
        </div>
    </div>
</div>
