# Autonoma: The Agentic Shorts Factory

The end-to-end autonomous pipeline for YouTube Shorts production. Autonoma leverages agentic workflows to handle the entire content lifecycle from niche research to final upload.

## Overview

Autonoma is a high-performance system designed to eliminate the manual overhead of short-form video creation. By integrating advanced language models with programmatic video rendering, it enables the creation of high-retention content at scale. Unlike traditional video editors, Autonoma uses reasoning agents to ensure visual-audio alignment and narrative flow.

## Core Capabilities

* Agentic Content Strategist: Utilizes Claude 3.7 and GPT-4o to analyze niches, generate viral scripts, and create detailed visual prompts.
* Multimodal Generation: Integration with Fal.ai (Kling 2.6 and Flux.1) for high-fidelity video clips and imagery.
* Neural Audio Synthesis: Uses ElevenLabs Multilingual v3 for natural narration with automated emotional inflection.
* Programmatic Rendering: Powered by Remotion to provide dynamic captioning, transitions, and 9:16 layout optimization.
* Autonomous Scheduling: A headless management system that queues content and executes uploads via the YouTube Data API v3.
* Professional Interface: A full-stack dashboard featuring glassmorphism design, dark mode, and scroll-triggered stacking animations.

## Workflow Logic

1. Ingestion: The user provides a core topic or data source.
2. Deconstruction: The AI agent breaks the topic into optimized script segments.
3. Asset Synthesis: Parallel processing of voiceover generation and video/image generation.
4. Assembly: Remotion compiles the assets, burns in dynamic subtitles, and renders the MP4.
5. Distribution: The system identifies optimal posting times and automates the YouTube upload process.

## Tech Stack

* Frontend: Next.js 15, Tailwind CSS, Framer Motion
* Backend: Python FastAPI, Node.js
* Orchestration: LangGraph / n8n
* Database: Supabase (PostgreSQL)
* Video Processing: Remotion, FFmpeg
* AI Infrastructure: GPT-4o, Fal.ai, ElevenLabs

## Installation

### Prerequisites
* Node.js v20 or higher
* Python 3.10 or higher
* FFmpeg
* API access for OpenAI, Fal.ai, and ElevenLabs

### Setup Steps
1. Clone the repository:
   git clone https://github.com/username/autonoma.git
2. Install frontend dependencies:
   cd apps/web && npm install
3. Install backend dependencies:
   cd apps/server && pip install -r requirements.txt
4. Configure environment variables in the .env file.

## Development Roadmap
* Integration with TikTok and Instagram Reels APIs.
* Real-time trend analysis for automated topic selection.
* Advanced performance analytics dashboard.
* Support for multi-language dubbing.

## License
Distributed under the MIT License. See LICENSE for more information.