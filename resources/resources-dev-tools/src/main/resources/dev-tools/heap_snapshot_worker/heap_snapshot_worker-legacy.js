/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import * as HeapSnapshotWorkerModule from './heap_snapshot_worker.js';

self.HeapSnapshotWorker = self.HeapSnapshotWorker || {};
HeapSnapshotWorker = HeapSnapshotWorker || {};

/** @constructor */
HeapSnapshotWorker.AllocationProfile = HeapSnapshotWorkerModule.AllocationProfile.AllocationProfile;

/** @constructor */
HeapSnapshotWorker.TopDownAllocationNode = HeapSnapshotWorkerModule.AllocationProfile.TopDownAllocationNode;

/** @constructor */
HeapSnapshotWorker.BottomUpAllocationNode = HeapSnapshotWorkerModule.AllocationProfile.BottomUpAllocationNode;

/** @constructor */
HeapSnapshotWorker.FunctionAllocationInfo = HeapSnapshotWorkerModule.AllocationProfile.FunctionAllocationInfo;

/** @interface */
HeapSnapshotWorker.HeapSnapshotItem = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotItem;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotEdge = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotEdge;

/** @interface */
HeapSnapshotWorker.HeapSnapshotItemIterator = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotItemIterator;

/** @interface */
HeapSnapshotWorker.HeapSnapshotItemIndexProvider = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotItemIndexProvider;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotNodeIndexProvider = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotNodeIndexProvider;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotEdgeIndexProvider = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotEdgeIndexProvider;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotRetainerEdgeIndexProvider =
    HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotRetainerEdgeIndexProvider;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotEdgeIterator = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotEdgeIterator;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotRetainerEdge = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotRetainerEdge;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotRetainerEdgeIterator =
    HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotRetainerEdgeIterator;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotNode = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotNode;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotNodeIterator = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotNodeIterator;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotIndexRangeIterator =
    HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotIndexRangeIterator;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotFilteredIterator = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotFilteredIterator;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotProgress = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotProgress;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotProblemReport = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotProblemReport;

/** @constructor */
HeapSnapshotWorker.HeapSnapshot = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshot;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotHeader = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotHeader;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotItemProvider = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotItemProvider;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotEdgesProvider = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotEdgesProvider;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotNodesProvider = HeapSnapshotWorkerModule.HeapSnapshot.HeapSnapshotNodesProvider;

/** @constructor */
HeapSnapshotWorker.JSHeapSnapshot = HeapSnapshotWorkerModule.HeapSnapshot.JSHeapSnapshot;

/** @constructor */
HeapSnapshotWorker.JSHeapSnapshotNode = HeapSnapshotWorkerModule.HeapSnapshot.JSHeapSnapshotNode;

/** @constructor */
HeapSnapshotWorker.JSHeapSnapshotEdge = HeapSnapshotWorkerModule.HeapSnapshot.JSHeapSnapshotEdge;

/** @constructor */
HeapSnapshotWorker.JSHeapSnapshotRetainerEdge = HeapSnapshotWorkerModule.HeapSnapshot.JSHeapSnapshotRetainerEdge;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotLoader = HeapSnapshotWorkerModule.HeapSnapshotLoader.HeapSnapshotLoader;

/** @constructor */
HeapSnapshotWorker.HeapSnapshotWorkerDispatcher =
    HeapSnapshotWorkerModule.HeapSnapshotWorkerDispatcher.HeapSnapshotWorkerDispatcher;