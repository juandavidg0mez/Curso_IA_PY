dict_parse_count_graph = {}

def identify_node(graph):
    parts_entry_nodes = graph.split(";")
    for part in parts_entry_nodes:
        node, edges = part.split(":")
        dict_parse_count_graph[node] = list(edges)
    return dict_parse_count_graph


def count_concurrency(graph):
    concurrency = {node: 0 for node in graph}

    for node, edges in graph.items():
        # Aristas salientes
        concurrency[node] += len(edges)

        # Aristas entrantes
        for target in edges:
            concurrency[target] += 1

    return concurrency


test_graph = "A:BCD;B:;C:D;D:BC"
print(identify_node(test_graph))

print(count_concurrency(dict_parse_count_graph))
