---
layout: default
title: Home
---

<div class="home">
    <div class="head">
        <div class="left">
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
            <div class="myself">
                <div class="salutation">
                    Hey There,
                </div>
                <div class="name">
                    I'm Aswanth
                </div>
                <div class="description">
                    I'm all about tech, from coding mobile apps to building websites and backend stuff. I love diving into different languages and tools to make cool stuff happen!
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
                <img src="{{ 'assets/chat-status.svg' | relative_url }}" />
                <span class="message">
                    {% for item in site.data.about %}
                        {{ item.status }}
                    {% endfor %}
                </span>
            </div>
            <img src="{{ 'assets/aswanthvc.png' | relative_url }}"/>
        </div>
    </div>
</div>
