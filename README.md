Website for CommonGround-

CommonGround — The Campus Social Platform That Actually Connects People

  ---
  The Problem We Solve

  Every semester, thousands of students show up to the same classes, attend the same campus events, and share the same interests — yet never
   meet. Generic social media is too broad. Group chats die after the first week. Event flyers get ignored. CommonGround closes that gap,
  giving University of Utah students one beautifully designed, purpose-built mobile app to discover, connect, and actually show up for their
   campus community.

  ---
  What CommonGround Does

  Identity & Onboarding That Actually Means Something

  The moment a user signs in, CommonGround starts building their identity. Using CAS Single Sign-On (the University of Utah's own
  authentication system), there's zero friction — students log in with their institutional credentials, no separate account creation
  required. The app then walks them through a thoughtfully sequenced onboarding flow:

  - Behavior Survey (5 questions across 5 screens) to understand social preferences
  - Interest Survey — multi-category interest tagging across grouped topic clusters, each with scored relevance weights
  - Class Selection — students register the actual courses they're enrolled in, creating organic connection points

  This isn't just profile fluff. It drives the entire matching and recommendation engine beneath the surface.

  ---
  Events — Discovery Meets Coordination

  The Events tab is where CommonGround shines as a real-time campus event hub:

  - Browse all approved events sorted chronologically, with photo banners, descriptions, location, and interest tags
  - RSVP with guest count — bring a friend, the system tracks total headcount including guests
  - Recurring event series — create weekly study groups, club meetings, or standing events that auto-generate across multiple days with
  proper recurrence metadata
  - GPS-powered distance indicators — every event card shows how far you are from the venue, with one-tap navigation to Maps
  - Interest tagging — events are tagged to topic categories, enabling interest-based filtering and personalized surfacing
  - Admin approval workflow — all user-submitted events go through a moderation queue before going live, keeping the feed clean
  - Event Group Chats — join an event and you're automatically added to that event's group chat. You're not just RSVPing; you're entering
  the conversation

  ---
  Group Chats — The Smart Social Layer

  CommonGround's group chat system is built around shared context, not random invites:

  - Chats are organized by class and interest group — when two students share a course and an interest, the system surfaces a chat that
  bridges both
  - Supabase Edge Function-powered "Suggested Chats" — a serverside recommendation engine analyzes your enrolled classes and interests, then
   proposes the most relevant chats you should join, including ones that don't exist yet (surfaced as "pending" suggestions that would
  create a new chat if joined)
  - Icebreaker Gates — before seeing any messages in a group chat, you must answer the group's custom icebreaker question. Your answer
  becomes your introduction. This deliberately slows entry just enough to ensure everyone who's in a chat actually wanted to be there
  - Realtime messaging built on Supabase's Postgres realtime engine, with race-condition hardening (epoch tracking to ignore stale
  callbacks), a polling reconciliation fallback for dropped events, and app-foreground refresh detection
  - Reply threads tied to icebreaker answers — tap someone's icebreaker response to see the conversation it started

  ---
  Hangouts — Private Events Within Your Social Circle

  Hangouts are the more intimate cousin of events. Instead of being open to all of campus, hangouts live inside group chats — they're
  private plans shared only with people already in that chat:

  - Create a hangout with a title, description, time, location, and image
  - Members of the group chat can RSVP and track who's going
  - Browse all hangouts you're part of from the hub screen
  - Hangout-specific group chats ensure coordination stays in context

  ---
  Direct Messaging & Friends

  CommonGround includes a full social graph:

  - Friend requests with pending/sent/received state management and push notification triggers on both send and accept
  - Block system — blocking removes any existing friend relation and prevents future contact
  - Direct Messages — private 1:1 chats between friends with their own settings panel
  - Friends list accessible from profile, with inline friend status shown on any user's profile card

  ---
  Notifications — Nothing Gets Missed

  A full push notification system built on Expo Push Tokens and Supabase Edge Functions:

  - Friend request received / accepted
  - Chat messages when you're not looking
  - Event updates and admin approval status
  - In-app notification center with read/unread state and one-tap mark-all-read

  ---
  Content Safety at Scale

  CommonGround is built for a campus environment — which means safety isn't optional:

  - Every chat message is screened through the OpenAI Omni Moderation API (free, no rate limits) in real time — hate speech, harassment,
  threats, and self-harm content are blocked before they reach anyone
  - Event and hangout content goes through stricter dual-layer moderation: a profanity word-list filter PLUS the OpenAI API, with category
  score thresholds for borderline content
  - Admin approval queue for all public events — nothing goes live without human review

  ---
  User Profiles That Tell a Story

  Every student on CommonGround has a rich, expressive profile:

  - Profile photo stored on Oracle Cloud Infrastructure object storage, served via signed Pre-Authenticated Requests (PARs) that are cached
  in Supabase and reused until expiry — minimizing round-trips and cloud costs
  - Bio, displayed interests, registered classes
  - Viewable by other students with friend-request and DM actions in-context
  - UserProfileModal appears inline throughout the app — tap any avatar anywhere and see that person's full profile without leaving what you
   were doing

  ---
  Contextual Onboarding for Every Screen

  First time on the Events tab? A tutorial slides up. First time in a group chat? Another tutorial explains icebreakers. Every one of the
  app's 12 major screens has a TutorialModal backed by a visited_page_flags database table — each page is only shown once, then permanently
  dismissed per user. No popup spam, just genuinely helpful guidance on first visit.

  ---
  The Tech Stack — Production Grade, Built Right

  ┌────────────────────┬──────────────────────────────────────────────────────────────────────┐
  │       Layer        │                              Technology                              │
  ├────────────────────┼──────────────────────────────────────────────────────────────────────┤
  │ Framework          │ React Native + Expo SDK 54 (new architecture enabled)                │
  ├────────────────────┼──────────────────────────────────────────────────────────────────────┤
  │ Language           │ TypeScript 5.9 (strict mode)                                         │
  ├────────────────────┼──────────────────────────────────────────────────────────────────────┤
  │ Navigation         │ Expo Router 6 (file-based, typed routes)                             │
  ├────────────────────┼──────────────────────────────────────────────────────────────────────┤
  │ UI Library         │ Gluestack UI + NativeWind/Tailwind                                   │
  ├────────────────────┼──────────────────────────────────────────────────────────────────────┤
  │ Animations         │ React Native Reanimated 4                                            │
  ├────────────────────┼──────────────────────────────────────────────────────────────────────┤
  │ Backend            │ Supabase (Postgres + Realtime + Row-Level Security + Edge Functions) │
  ├────────────────────┼──────────────────────────────────────────────────────────────────────┤
  │ Image Storage      │ Oracle Cloud Infrastructure (OCI) Object Storage                     │
  ├────────────────────┼──────────────────────────────────────────────────────────────────────┤
  │ Auth               │ University of Utah CAS SSO + Supabase JWT sessions                   │
  ├────────────────────┼──────────────────────────────────────────────────────────────────────┤
  │ Content Moderation │ OpenAI Omni Moderation API (via Supabase Edge Function proxy)        │
  ├────────────────────┼──────────────────────────────────────────────────────────────────────┤
  │ Push Notifications │ Expo Push Notification Service                                       │                                             
  ├────────────────────┼──────────────────────────────────────────────────────────────────────┤                                             
  │ Location           │ Expo Location + custom Haversine distance utils                      │                                             
  ├────────────────────┼──────────────────────────────────────────────────────────────────────┤                                             
  │ React Version      │ React 19.1 with React Compiler experiment enabled                    │                                             
  └────────────────────┴──────────────────────────────────────────────────────────────────────┘                                             
                                                                                                                                            
  ---                                                                                                                                       
  What Makes It Technically Impressive                                                                                                      
                                                                                                                                        
  University SSO Integration. CAS login flows through a Supabase Edge Function that acts as the service redirect target, validates the CAS  
  ticket server-side, issues Supabase JWT tokens, and deep-links back into the app — all without ever storing university credentials. This  
  is the same auth infrastructure the university itself uses.                                                                               
                                                                                                                                            
  Oracle Cloud + PAR Token Management. Images don't live in Supabase. They're stored in OCI object storage and accessed via                 
  Pre-Authenticated Requests. The app manages PAR lifecycle — checking Supabase for a valid unexpired PAR before requesting a new one,      
  minimizing OCI API calls.                                                                                                                 
                                                                                                                                            
  Supabase RPC for Complex Operations. Event creation with group chat initialization, admin event approval, and recurring event series setup
   all go through custom Postgres RPC functions — keeping business logic server-side and out of client hands.                               
                                                                                                                                            
  Realtime Chat with Resilience. The chat screen doesn't just subscribe to Supabase realtime channels. It tracks a subscription epoch to    
  discard stale callbacks from previous subscriptions, maintains a polling reconciliation loop to catch any messages that realtime missed,  
  and refreshes on both screen focus and app foreground transitions.                                                                        
                                                                                                                                            
  Interest Graph with Scored Relations. Interests don't exist in a flat list — they belong to interest_groups with a relation_score         
  weighting. This powers intelligent groupings and future recommendation improvements without schema changes.                               
                                                                                                                                            
  Suggested Chat Engine (Edge Function). A serverside function cross-references a user's classes and interests against existing group chats 
  and their membership, and decides whether to surface an existing joinable chat or propose a new one — all with appropriate labeling for   
  the UI to render correctly.                                                                                                               
                                                                                                                                            
  ---                                                                                                                                       
  The Vision                                                                                                                                
                                                                                                                                            
  CommonGround isn't a messaging app with events bolted on, or an event app with a chat tab. It's a social operating system for campus life 
  — one where your classes, interests, events, and friendships all live in the same space and reinforce each other. Every feature is        
  designed to reduce the activation energy required to go from "I see this person in class" to "we actually hang out."                      
                                                                                                                                            
  Built by students, for students. At the University of Utah. Starting here — ready to scale anywhere.   